type MuscleGroupResults = [
    {
        id: number;
        name: string;
        name_en: string;
        is_front: boolean;
        image_url_main: string;
        image_url_secondary: string;
    }
];

type ExerciseResponse = {
    next: string,
    results: ExerciseResults
}

type ExerciseResults = [
    {
        id: number,
        uuid: string,
        name: string,
        exercise_base: number,
        description: string,
        creation_date: string,
        category: number,
        muscles: number[],
        muscles_secondary: number[],
        equipment: number[],
        language: number,
        license: number,
        license_author: string,
        variations: number[],
        author_history: string[]
    }
];

type MuscleGroupMap = Record<number, string>;
