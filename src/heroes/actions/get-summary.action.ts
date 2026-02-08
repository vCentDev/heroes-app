import { heroApi } from '../api/hero.api';
import type { SummaryInformation } from '../types/summary-information.response';

export const getSummaryAction = async () => {
    const { data } = await heroApi.get<SummaryInformation>('/summary');

    return data;
};
