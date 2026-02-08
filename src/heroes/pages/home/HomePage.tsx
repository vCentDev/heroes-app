import { useMemo } from "react"
import { useSearchParams } from "react-router"
import { Heart } from "lucide-react"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"


export const HomePage = () => {
    // const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')

    const [searchParams, setSearchParams] = useSearchParams();

    const activeTab = searchParams.get('tab') ?? 'all';
    const page = searchParams.get('page') ?? '1';
    const limit = searchParams.get('limit') ?? '6';

    const selectTab = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains']
        return validTabs.includes(activeTab) ? activeTab : 'all';
    }, [activeTab])

    const { data: heroesResponse } = usePaginatedHero(Number(page), Number(limit))
    const { data: summary } = useHeroSummary();


    return (
        <>
            <>
                {/* Header */}
                <CustomJumbotron
                    title="Universo de SuperHéroes"
                    subtitle="Descubre, explora y administra super héroes y villanos"
                />

                <CustomBreadCrumbs currentPage="Super Héroes" />

                {/* Stats Dashboard */}
                <HeroStats />

                {/* Controls */}


                {/* Advanced Filters */}


                {/* Tabs */}
                <Tabs value={selectTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'all');
                                return prev;
                            })}
                        >All Characters ({summary?.totalHeroes})</TabsTrigger>
                        <TabsTrigger value="favorites" className="flex items-center gap-2"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'favorites');
                                return prev;
                            })}
                        >
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'heroes');
                                return prev;
                            })}
                        >Heroes ({summary?.heroCount})</TabsTrigger>
                        <TabsTrigger value="villains"
                            onClick={() => setSearchParams((prev) => {
                                prev.set('tab', 'villains');
                                return prev;
                            })}
                        >Villains ({summary?.villainCount})</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {/* Mostrar todos los personajes */}
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* Mostrar todos los personajes favoritos */}
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Mostrar todos los héroes */}
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Mostrar todos los villanos */}
                        <HeroGrid heroes={heroesResponse?.heroes ?? []} />
                    </TabsContent>
                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
            </>
        </>
    )
}
