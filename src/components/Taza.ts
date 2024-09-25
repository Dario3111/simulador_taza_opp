// src/components/Taza.ts
//ATRIBUTOS
export default class Taza {
  private volumen: number; // Capacidad total de la taza
  private liquido: string; // Tipo de bebida
  private cantidad: number; // Cantidad actual de líquido

  constructor(volumen: number, liquido: string, cantidad: number) {
    this.volumen = volumen;
    this.liquido = liquido;
    this.cantidad = cantidad;
  }

  // METODOS para llenar la taza
  llenar(cantidad: number): void {
    if (this.cantidad + cantidad <= this.volumen) {
      this.cantidad += cantidad;
    } else {
      console.log("No cabe más líquido en la taza.");
    }
  }

  // Método para beber de la taza
  beber(cantidad: number): void {
    if (this.cantidad >= cantidad) {
      this.cantidad -= cantidad;
    } else {
      console.log("No hay suficiente líquido para beber.");
    }
  }

  // Método para vaciar la taza
  vaciar(): void {
    this.cantidad = 0;
  }

  // Obtener la cantidad actual
  obtenerCantidad(): number {
    return this.cantidad;
  }

  // Obtener el tipo de líquido
  obtenerLiquido(): string {
    return this.liquido;
  }

  // Cambiar el tipo de líquido
  cambiarLiquido(nuevoLiquido: string): void {
    this.liquido = nuevoLiquido;
  }
}
