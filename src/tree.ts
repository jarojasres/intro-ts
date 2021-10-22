export interface Tree {
    name: string;
    children?: string[] 
};

export const childrenLength = (tree: Tree): number => tree.children?.length || 0; 
