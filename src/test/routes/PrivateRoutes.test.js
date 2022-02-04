import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoutes } from '../../routes/PrivateRoutes';
import {MemoryRouter} from 'react-router-dom'


    jest.mock( 'react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        Navigate: () => <span>Saliendo de aqui</span>
    }))



describe('Pruebas en componente <PrivateRoutes />', () => {

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente de esta autenticado y guardar en el localStorage', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Juanito'
            }
        }


        const wrapper = mount(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoutes>
                        <h1>Private Component</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>

        )

            console.log(wrapper.html());
            expect(wrapper.text().trim()).toBe('Private Component');
            expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/');
        

    });



    test('Debe de bloquear el componente si no esta autenticado', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }


        const wrapper = mount(

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoutes>
                        <h1>Private Component</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>

        )

        console.log(wrapper.html());
        expect(wrapper.text().trim()).toBe('Saliendo de aqui');

    });
    
});