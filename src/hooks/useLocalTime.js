import { useEffect, useState } from 'react'

/** Live clock for a given IANA time zone, e.g. "03:42 PM". Updates every 20s. */
export function useLocalTime(timeZone) {
  const format = () =>
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 20000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone])
  return time
}
