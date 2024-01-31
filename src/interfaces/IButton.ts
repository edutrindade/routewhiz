export interface ButtonProps {
	title: string;
	loading?: boolean;
	onPress: () => void;
	style?: object;
	social?: boolean;
	icon?:
		| 'repeat'
		| 'map'
		| 'key'
		| 'push'
		| 'filter'
		| 'at'
		| 'link'
		| 'search'
		| 'image'
		| 'text'
		| 'alert'
		| 'checkbox'
		| 'menu'
		| 'radio'
		| 'timer'
		| 'close'
		| 'book'
		| 'pause'
		| 'mail';
	//icon?: React.FC<{ name: string; size: number; color: string; style: object }>;
}
