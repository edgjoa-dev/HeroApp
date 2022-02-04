
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext'
import { RoutesApp } from '../../routes/RoutesApp';



describe('Pruebas en el componente <RoutesApp />', () => {    

    test('Se debe mostrar LoginScreen si el usuario no esta logeado', () => {

        const contextValue = {
            user: {
                logged: false
            }
        }
        
        const wrapper = mount(
        <BrowserRouter>
            <AuthContext.Provider value={contextValue} >
                <RoutesApp />
            </AuthContext.Provider>
        </BrowserRouter>
    );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');

    });
    

    test('Se debe mostrar el componente Marvel si el usuario esta logeado', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'Joaquin'
            }
        }
        
        const wrapper = mount(
        <BrowserRouter>
            <AuthContext.Provider value={contextValue} >
                <RoutesApp />
            </AuthContext.Provider>
        </BrowserRouter>
    );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);

    });








});
