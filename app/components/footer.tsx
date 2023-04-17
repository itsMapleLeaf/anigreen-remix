import { ExternalLink } from "~/components/external-link"

export function Footer() {
  return (
    <footer className="container text-sm opacity-75">
      made with ♥️ by{" "}
      <ExternalLink href="https://mapleleaf.dev" className="link">
        MapleLeaf
      </ExternalLink>{" "}
      •{" "}
      <ExternalLink
        href="https://github.com/itsMapleLeaf/anigreen"
        className="link"
      >
        view source
      </ExternalLink>{" "}
      • not affiliated with{" "}
      <ExternalLink href="https://anilist.co" className="link">
        AniList
      </ExternalLink>
    </footer>
  )
}