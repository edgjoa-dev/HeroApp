import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRoutes } from '../../routes/DashboardRoutes';




describe('Pueba en componente DasboardRoutes', () => {
    
    test('Debe mostrarse correctamente como Marvel', () => {

        const contextValue = {
            user: { 
                logged: true,
                name: 'Juanito'
            }
        }

        const wrapper = mount( 

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']} >
                    <DashboardRoutes />           
                </MemoryRouter>
            </AuthContext.Provider>
            
            );


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').first().text().trim()).toBe('Juanito');
    });

    test('Debe mostrarse correctamente componete de Dc', () => {

        const contextValue = {
            user: { 
                logged: true,
                name: 'Juanito'
            }
        }

        const wrapper = mount( 

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']} >
                    <DashboardRoutes />           
                </MemoryRouter>
            </AuthContext.Provider>
            
            );


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Dc');
    });
    
    test('Debe mostrarse correctamente componete de Search', () => {

        const contextValue = {
            user: { 
                logged: true,
                name: 'Juanito'
            }
        }

        const wrapper = mount( 

            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search']} >
                    <DashboardRoutes />           
                </MemoryRouter>
            </AuthContext.Provider>
            
            );


        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Search');
    });

})
