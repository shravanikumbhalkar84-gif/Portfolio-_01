// Set these env vars at deploy time (see README). Defaults suit local dev / root-domain hosting.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function withBasePath(path) {
	return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`
}

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com').replace(/\/$/, '')
