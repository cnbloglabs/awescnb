export function getAjaxBaseUrl(): string {
  var n = location.host.split('.')[0]
  return n.toLowerCase() === window.currentBlogApp.toLowerCase()
    ? '/ajax/'
    : `/${window.currentBlogApp}/ajax`
}

export function getRequestVerificationToken(): string {
  return $('#antiforgery_token').val() as string
}
