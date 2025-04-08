import Card from './Card';
import Navbar from '../../components/layout/Navbar';

function Home() {
    return (
        
        <div className = 'home-container'>

            <div className = 'home-navbar-container'>

                <Navbar />

            </div>

            <main className = 'home-main-container'>

                <Card
                    headline = "Dont'have account? Register now!"
                    button = "Register"
                /> 
                <Card
                    headline = "Already have an account? Login now!"
                    button = "Login"
                />

            </main>

        </div>

    );

    
}