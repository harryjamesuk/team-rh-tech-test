import {getMuscleGroupMap} from "../utils/muscle_groups";

describe('<id,name> map', () => {
    let sample: MuscleGroupResults;
    beforeEach(() => {
        sample = [
            {
                id: 1,
                name: 'name',
                name_en: '',
                is_front: false,
                image_url_main: '',
                image_url_secondary: ''
            }
        ];
    });
    test('single item', () => {
        expect(getMuscleGroupMap(sample)).toEqual({1: 'name'});
    });
    test('multiple items', () => {
        sample.push({
            id: 2,
            name: 'name2',
            name_en: '',
            is_front: false,
            image_url_main: '',
            image_url_secondary: ''
        });
        expect(getMuscleGroupMap(sample)).toEqual({1: 'name', 2: 'name2'});
    });
});

export {};
