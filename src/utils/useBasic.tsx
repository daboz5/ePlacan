export default function useBasic() {

    const moveToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return {
        moveToTop
    }
}