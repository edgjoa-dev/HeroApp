import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { SearchScreen } from '../../components/search/SearchScreen';


const mockNavigate = jest.fn();


jest.mock('react-router-dom', ()=> ({

    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('Prueba en componente Search', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen /> 
            </MemoryRouter>
            );
        
            expect( wrapper).toMatchSnapshot();
            expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un Héroe');


    });

    test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
                
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen /> 
            </MemoryRouter>
            );

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.find('input').prop('value')).toBe('batman');


    });


    test('Debe de mostrar alerta de error si no se encuentra la entrada del input de busqueda de heroes', () => {
                
        const wrapper = mount( 
            <MemoryRouter initialEntries={['search?q=batman123']}>
                <SearchScreen /> 
            </MemoryRouter>
            );

            expect(wrapper.find('.alert-danger').text().trim()).toBe('No se encontraron resultados de: batman123');
    });


    test('Debe llamar al navigate a la nueva pantalla', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['search']}>
                <SearchScreen /> 
            </MemoryRouter>
            );

            wrapper.find('input').simulate('change', {
                target: {
                    name: 'searchText',
                    value: 'batman'
                }
            })

            wrapper.find('form').prop('onSubmit')({
                preventDefault: () => {}
            })

            expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');
    });
    
    
    
})
