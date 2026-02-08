import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action"

export const usePaginatedHero = (page: number, limit: number, category: string) => {

    return useQuery({
        queryKey: ['heroes', { page, limit, category }],
        queryFn: () => getHeroesByPageAction(Number(page), Number(limit), category),
        staleTime: 1000 * 60 * 5,
    })
}
