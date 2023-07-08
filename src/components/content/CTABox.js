import {useContext} from 'react';
import AppContext from '../../AppContext';

const CTABox = ({isFirst, isPaid}) => {
    const {accentColor, publication, member} = useContext(AppContext);

    const buttonStyle = {
        backgroundColor: accentColor
    };

    const linkStyle = {
        color: accentColor
    };

    const titleText = (isFirst ? 'Inicie uma conversa' : 'Participe da discussão');

    const handleSignUpClick = () => {
        window.location.href = (isPaid && member) ? '#/portal/account/plans' : '#/portal/signup';
    };

    const handleSignInClick = () => {
        window.location.href = '#/portal/signin';
    };

    return (
        <section className={`flex flex-col items-center pt-[40px] ${member ? 'pb-[32px]' : 'pb-[48px]'} ${!isFirst && 'mt-4'} border-y border-[rgba(0,0,0,0.075)] dark:border-[rgba(255,255,255,0.1)] sm:px-8`}>
            <h1 className={`mb-[8px] text-center font-sans text-[24px] tracking-tight  text-black dark:text-[rgba(255,255,255,0.85)] ${isFirst ? 'font-semibold' : 'font-bold'}`}>
                {titleText}
            </h1>
            <p className="sm:max-w-screen-sm mb-[28px] w-full px-0 text-center font-sans text-[16px] leading-normal text-neutral-600 dark:text-[rgba(255,255,255,0.85)] sm:px-8">
                Se torne {isPaid && 'paid'} um membro do <span className="font-semibold">{publication}</span> para poder comentar.
            </p>
            <button onClick={handleSignUpClick} className="font-san mb-[12px] inline-block rounded px-5 py-[14px] font-medium leading-none text-white transition-all hover:opacity-90" style={buttonStyle}>
                {(isPaid && member) ? 'Se inscreva' : 'Entrar'}
            </button>
            {!member && (<p className="text-center font-sans text-sm text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.5)]">
                <span className='mr-1 inline-block text-[15px]'>Já é um membro?</span>
                <button onClick={handleSignInClick} className="rounded-md text-sm font-semibold transition-all hover:opacity-90" style={linkStyle}>Entrar</button>
            </p>)}
        </section>
    );
};

export default CTABox;
