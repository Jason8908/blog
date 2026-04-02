import { cn } from "@/lib/utils"
import { useRef, useState, useEffect, useCallback } from "react"
import { Play, Pause, Volume2, Volume1, VolumeX } from "lucide-react"

const EVENTS = {
  MOUSE_MOVE: "mousemove",
  MOUSE_UP: "mouseup",
  TIME_UPDATE: "timeupdate",
  LOADED_METADATA: "loadedmetadata",
  ENDED: "ended",
} as const

interface AudioPlayerProps {
  src: string
  name?: string
  artist?: string
  className?: string
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

function ScrollingText({ text, className: textClassName }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [shouldScroll, setShouldScroll] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const textEl = textRef.current
    if (!container || !textEl) return

    const check = () => setShouldScroll(textEl.scrollWidth > container.clientWidth)
    check()

    const observer = new ResizeObserver(check)
    observer.observe(container)
    return () => observer.disconnect()
  }, [text])

  return (
    <div ref={containerRef} className={cn("overflow-hidden", textClassName)}>
      <span
        ref={textRef}
        className={cn("inline-block whitespace-nowrap", shouldScroll && "animate-marquee")}
      >
        {text}
        {shouldScroll && <span className="px-8">{text}</span>}
      </span>
    </div>
  )
}

export default function AudioPlayer({ src, name, artist, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const volumeRef = useRef<HTMLDivElement>(null)

  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [prevVolume, setPrevVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onTime = () => setCurrentTime(audio.currentTime)
    const onMeta = () => setDuration(audio.duration)
    const onEnded = () => setPlaying(false)

    audio.addEventListener(EVENTS.TIME_UPDATE, onTime)
    audio.addEventListener(EVENTS.LOADED_METADATA, onMeta)
    audio.addEventListener(EVENTS.ENDED, onEnded)

    return () => {
      audio.removeEventListener(EVENTS.TIME_UPDATE, onTime)
      audio.removeEventListener(EVENTS.LOADED_METADATA, onMeta)
      audio.removeEventListener(EVENTS.ENDED, onEnded)
    }
  }, [])

  const togglePlay = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }, [playing])

  const toggleMute = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (volume > 0) {
      setPrevVolume(volume)
      setVolume(0)
      audio.volume = 0
    } else {
      setVolume(prevVolume)
      audio.volume = prevVolume
    }
  }, [volume, prevVolume])

  const applySeek = useCallback((clientX: number) => {
    const audio = audioRef.current
    const bar = progressRef.current
    if (!audio || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    audio.currentTime = ratio * audio.duration
  }, [])

  const applyVolume = useCallback((clientY: number) => {
    const audio = audioRef.current
    const bar = volumeRef.current
    if (!audio || !bar) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, 1 - (clientY - rect.top) / rect.height))
    setVolume(ratio)
    audio.volume = ratio
  }, [])

  const startSeekDrag = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    applySeek(e.clientX)
    const onMove = (ev: MouseEvent) => applySeek(ev.clientX)
    const onUp = () => {
      window.removeEventListener(EVENTS.MOUSE_MOVE, onMove)
      window.removeEventListener(EVENTS.MOUSE_UP, onUp)
    }
    window.addEventListener(EVENTS.MOUSE_MOVE, onMove)
    window.addEventListener(EVENTS.MOUSE_UP, onUp)
  }, [applySeek])

  const startVolumeDrag = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    applyVolume(e.clientY)
    const onMove = (ev: MouseEvent) => applyVolume(ev.clientY)
    const onUp = () => {
      window.removeEventListener(EVENTS.MOUSE_MOVE, onMove)
      window.removeEventListener(EVENTS.MOUSE_UP, onUp)
    }
    window.addEventListener(EVENTS.MOUSE_MOVE, onMove)
    window.addEventListener(EVENTS.MOUSE_UP, onUp)
  }, [applyVolume])

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div className={cn("rounded-xl border border-border px-7 py-5", className)}>
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={togglePlay}
          className="shrink-0 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
        >
          {playing ? <Pause className="size-6" /> : <Play className="size-6" />}
        </button>

        {(name || artist) && (
          <div className="min-w-0 shrink-0 max-w-[30%]">
            {name && <ScrollingText text={name} className="text-sm font-medium leading-tight" />}
            {artist && <ScrollingText text={artist} className="text-xs text-muted-foreground leading-tight" />}
          </div>
        )}

        <span className="shrink-0 text-md text-muted-foreground tabular-nums">
          {formatTime(currentTime)}
        </span>

        <div
          ref={progressRef}
          onMouseDown={startSeekDrag}
          className="group relative h-1.5 flex-1 cursor-pointer rounded-full bg-muted"
        >
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-muted-foreground/60 transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="shrink-0 text-md text-muted-foreground tabular-nums">
          {formatTime(duration)}
        </span>

        <div className="group/vol relative flex shrink-0 items-center">
          <button
            type="button"
            onClick={toggleMute}
            className="flex cursor-pointer items-center justify-center text-muted-foreground/60 transition-colors hover:text-foreground"
          >
            {volume === 0 ? <VolumeX className="size-6" /> : volume < 0.5 ? <Volume1 className="size-6" /> : <Volume2 className="size-6" />}
          </button>
          <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 pb-2 opacity-0 transition-opacity group-hover/vol:pointer-events-auto group-hover/vol:opacity-100">
            <div className="flex h-24 items-end rounded-lg border border-border bg-background px-3 py-2">
              <div
                ref={volumeRef}
                onMouseDown={startVolumeDrag}
                className="relative h-full w-1.5 cursor-pointer rounded-full bg-muted"
              >
                <div
                  className="absolute inset-x-0 bottom-0 rounded-full bg-muted-foreground/60"
                  style={{ height: `${volume * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
