import { useEffect } from 'react';

export const useScrollController = (open) => {
    useEffect(() => {
        if (open) {
            scrollController.disabledScroll();
        } else {
            scrollController.enabledScroll();
        }
    }, [open]);
};

const scrollController = {
    scrollPosition: 0,
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        top: -${scrollController.scrollPosition}px;
        left: 0;
        height: 100vh;
        width: 100vw;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        padding-bottom: ${window.innerHeight - document.body.offsetHeight}px;
    `;
        document.documentElement.style.scrollBehavior = 'unset';
    },
    enabledScroll() {
        document.body.style.cssText = '';
        window.scroll({ top: scrollController.scrollPosition })
        document.documentElement.style.scrollBehavior = '';
    },
}