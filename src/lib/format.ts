const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

/** 'YYYY-MM' -> 'SEP 2026' */
export function formatMonthYear(ym: string): string {
  const [year, month] = ym.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

/** ('2026-06', null) -> 'JUN 2026 – NOW' */
export function formatDateRange(start: string, end: string | null): string {
  return `${formatMonthYear(start)} – ${end ? formatMonthYear(end) : 'NOW'}`
}
