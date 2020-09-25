export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if((presupuesto / 4) > restante){
        // Si el restante es menor al 25% del presupuesto
        clase = 'alert alert-danger';
    } else if ((presupuesto / 2) > restante){
        // Si el restante es menor al 50% del presupuesto
        clase = 'alert alert-warning';
    } else {
        // Si el restante es superior al 50% del presupuesto
        clase = 'alert alert-success';
    }

    return clase;
}