function add (N1,N2)
{
    return N1.value+N2.value;
}
function sub (N1,N2)
{
    return N1.value-N2.value;
}
function mult (N1,N2)
{
    return N1.value*N2.value;
}
function div (N1,N2)
{
    if(N2==0)
    {
        alert('Error');
    }
    else
    {
        return N1.value/N2.value;
    }
}