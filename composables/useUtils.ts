export const useUtils = () => {
    const function1 = () => {
        console.log('function 1');
    }

    const function2 = () => {
        console.log('function 2');
    }

    return {
        function1,
        function2
    }
}