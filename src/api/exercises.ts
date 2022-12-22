import {EXERCISE_URL, EXERCISES_PER_PAGE, LANG_EN} from "./api";

export async function getExercises(id: number, offset: number = 0) {
    const queryParams = [
        `muscles=${id}`,
        `language=${LANG_EN}`,
        `limit=${EXERCISES_PER_PAGE}`,
        `offset=${offset}`
    ];
    const res = await fetch(`${EXERCISE_URL}?${queryParams.join('&')}`);

    if (res.ok) {
        const json = await res.json();
        if (json.results?.length > 0) {
            return json as ExerciseResponse;
        } else {
            throw new Error("Failed to fetch data");
        }
    } else {
        throw new Error("Failed to fetch data");
    }
}
