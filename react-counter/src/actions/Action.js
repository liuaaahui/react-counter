export const INCREASE='INCREASE';
export const DECREASE='DECREASE';
export const GIVENUMBER='GIVENUMBER';
export const CLEAN='CLEAN';
 
export function increaseAction(){
    return {
        type:INCREASE
    }
}
 
export function decreaseAction(){
    return {
        type:DECREASE
    }
}
