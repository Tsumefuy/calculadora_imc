import './LabelNum.css';

export function LabelNum(
{
    children, 
    htmlFor, 
    name, 
    placeholder,
    min,
    step
}: 
{
    children: React.ReactNode, 
    htmlFor: string
    name: string,
    placeholder: string
    min: number
    step?: number
}) {
    return (
        <label className='form-text-label' htmlFor={htmlFor}>
            {children}
            <input
                type='number'
                name={name}
                min={min}
                placeholder={placeholder}
                step={step ? step : 0.01}
            />
        </label>
    )
}