import { create } from "zustand";
import {
  EditarCategorias,
  EliminarCategorias,
  InsertarCategorias,
  MostrarCategorias,
} from "../index";
export const useCategoriasStore = create((set, get) => ({
  datacategoria: [],
  mostrarCategorias: async (p) => {
    const response = await MostrarCategorias(p);
    set({ datacategoria: response });
    return response;
  },
  insertarCategorias: async (p) => {
    await InsertarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  eliminarCategoria: async (p) => {
    await EliminarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
  editarCategoria: async (p) => {
    await EditarCategorias(p);
    const { mostrarCategorias } = get();
    set(mostrarCategorias(p));
  },
}));
