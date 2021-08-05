import MainContainer from './view/MainContainer.mjs';

const onStart = () => Neo.app({
    appPath : 'apps/myapp/',
    mainView: MainContainer,
    name    : 'MyApp'
});

export {onStart as onStart};