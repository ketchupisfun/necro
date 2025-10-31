import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { normalizeClientName } from "@/lib/cdn-links"

interface ClientCardProps {
  name: string
  version: string
  description?: string
  featured?: boolean
}

export function ClientCard({ name, version, description, featured }: ClientCardProps) {
  const clientSlug = normalizeClientName(name)
  const cdnUrl = `/cdn/${clientSlug}.dll`

  return (
    <a href={cdnUrl} className="block">
      <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-[1.02] cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg">{name}</h3>
          {featured && (
            <Badge variant="default" className="bg-primary text-primary-foreground">
              Top 3
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs">
            {version}
          </Badge>
        </div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </Card>
    </a>
  )
}
