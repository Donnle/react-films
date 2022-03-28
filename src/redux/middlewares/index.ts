export const logger = (state: any) => (next: any) => (action: any) => {
  return next(action)
}
