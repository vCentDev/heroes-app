import { use } from "react";
import { describe, test } from "vitest";

import { FavoriteHeroContext, FavoriteHeroProvider } from "./FavoriteHeroContext";
import { screen } from "@testing-library/dom";

const TestComponent = () => {
    const { favoriteCount, favorites, isFavorite, toggleFavorite } = use(FavoriteHeroContext)

    return (
        <div>
            <div data-testid="favorite-count">{favoriteCount}</div>
        </div>
    )
}

const renderContextTest = () => {

    return (
        <FavoriteHeroProvider>
            <TestComponent />
        </FavoriteHeroProvider>
    )
}

describe('FavoriteHeroContext', () => {
    test('should initialize with default values', () => {
        renderContextTest()

        screen.debug()
    })
})