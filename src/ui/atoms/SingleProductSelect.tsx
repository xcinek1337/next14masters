export const SingleProductSelect = () => {
	return (
		<select defaultValue={"size"} className="my-3 cursor-pointer py-3" name="" id="">
			<option value="size" disabled>
				Size
			</option>
			<option value="a">M</option>
			<option value="b">L</option>
			<option value="c" disabled>
				XL
			</option>
			<option value="d">XXL</option>
		</select>
	);
};
