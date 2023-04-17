import { redirect } from "@vercel/remix"
import { env } from "../env"

export function loader() {
  const params = new URLSearchParams({
    client_id: env.ANILIST_CLIENT_ID,
    redirect_uri: env.ANILIST_REDIRECT_URI,
    response_type: "code",
  })
  return redirect(
    `https://anilist.co/api/v2/oauth/authorize?${params.toString()}`,
  )
}