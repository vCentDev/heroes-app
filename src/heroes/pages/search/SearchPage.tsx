import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { SearchControls } from "./ui/SearchControls"
import { useQuery } from "@tanstack/react-query"
import { searchHeroAction } from "@/heroes/actions/search-heros.action"
import { useSearchParams } from "react-router"
import { HeroGrid } from "@/heroes/components/HeroGrid"

export const SearchPage = () => {
    const [searchParams] = useSearchParams();

    const name = searchParams.get('name') ?? undefined

    const { data: heroes = [] } = useQuery({
        queryKey: ['search', { name }],
        queryFn: () => searchHeroAction({ name }),
        staleTime: 1000 * 60 * 5 // 5 minits
    })

    return (
        <>
            <CustomJumbotron
                title="Búsqueda de SuperHéroes"
                subtitle="Descubre, explora y administra super héroes y villanos"
            />
            {/* Stats dashboards */}
            <HeroStats />

            {/* Filter and search */}
            <SearchControls />

            <HeroGrid heroes={heroes} />
        </>
    )
}
