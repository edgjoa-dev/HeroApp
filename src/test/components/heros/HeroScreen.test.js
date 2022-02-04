
import { mount } from 'enzyme';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HeroeScreen } from '../../../components/heros/HeroeScreen';




    const mockNavigate = jest.fn();
    jest.mock( 'react-router-dom', () => ({

        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockNavigate,

    }));




describe('Pruebas en componente <HeroScreen />', () => {

    test('No debe demostrar el HeroScreen si no hay un héroe en el URL', () => {

        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero']}>
                    <Routes>
                        <Route path="/hero" element={<HeroeScreen />} />
                        <Route path="/" element={ <h1>No Hero Page</h1> } />
                    </Routes>
                </MemoryRouter>
            )
            
            expect(wrapper.find('h1').text().trim()).toBe('No Hero Page');
    });
    
    
    
    test('Debe mostrar un héroe si el parámetro existe y se encuentra', () => {

        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                    <Routes>
                        <Route path="/hero/:heroeId" element={<HeroeScreen />} />
                        <Route path="/" element={ <h1>No Hero Page</h1> } />
                    </Routes>
                </MemoryRouter>
            )
            
            console.log(wrapper.html());
            expect(wrapper.find('.row').exists()).toBe(true);
    });
    

    test('Debe de retornar a la pantalla anterior', () => {
        
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-iron']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroeScreen />} />
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();
        expect(mockNavigate).toHaveBeenCalledWith(-1);

    });

    test('Debe mostrar el No PAge si el parámetro no existe y no se encuentra', () => {

        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-iron123']}>
                    <Routes>
                        <Route path="/hero/:heroeId" element={<HeroeScreen />} />
                        <Route path="/" element={ <h1>No Hero Page</h1> } />
                    </Routes>
                </MemoryRouter>
            )
            
            expect(wrapper.text()).toBe('No Hero Page');
    });



});