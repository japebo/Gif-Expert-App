import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs', () => {
    test('Debe retornar 10 elementos', async () => {
        const gifs = await getGifs('One Punch')

        expect(gifs.length).toBe(10);
    })

    test('Debe retornar 0 elementos', async () => {
        const gifs = await getGifs('')
        // console.log(gifs)
        expect(gifs.length).toBe(0);
    })
    
})
