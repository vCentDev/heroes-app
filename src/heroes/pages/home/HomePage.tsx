import { useState } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrumbs } from "@/components/custom/CustomBreadCrumbs"

import { Heart } from "lucide-react"

export const HomePage = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'heroes' | 'villains'>('all')

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
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all"
                            onClick={() => setActiveTab('all')}
                        >All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites" className="flex items-center gap-2"
                            onClick={() => setActiveTab('favorites')}
                        >
                            <Heart className="h-4 w-4" />
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes"
                            onClick={() => setActiveTab('heroes')}
                        >Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains"
                            onClick={() => setActiveTab('villains')}
                        >Villains (2)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        {/* Mostrar todos los personajes */}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="favorites">
                        {/* Mostrar todos los personajes favoritos */}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="heroes">
                        {/* Mostrar todos los héroes */}
                        <HeroGrid />
                    </TabsContent>
                    <TabsContent value="villains">
                        {/* Mostrar todos los villanos */}
                        <HeroGrid />
                    </TabsContent>
                </Tabs>


                {/* Pagination */}
                <CustomPagination totalPages={6} />
            </>
        </>
    )
}
