<script>
	import { goto } from '$app/navigation';
    import { Field , FormBox } from '$lib/components';
    import { auth } from '$lib/store';
    
    $: emailError = '';
    $: passError = '';
    $: loading = false;
    
    const cb = () => {
        loading = true;
        return async ({result}) => {
            if(result.type === 'invalid') {
                const { data } = result;              
                if(data.email && data.missing) emailError = 'Debe ingresar un correo electrónico';
                if(data.pass && data.missing) passError = 'Debe ingresar una contraseña';
                if(data.pass && data.short) passError = 'La contraseña es demasiado corta';
                loading = false;
            }
            if(result.type === 'success') {
                const { token , id , role } = result.data;
                auth.login({token,id,role,isAuth:true});
                loading = false;
                goto('/panel');
            }
        }
    }
</script>

<div class="signin">
    <FormBox btn="Iniciar sesión" title="Inicio de sesión" noDivider={true} {cb} {loading} >
        <Field 
            name="email" type="email" ph="ejemplo@mail.com" label="Correo electrónico" 
            warning={emailError} fb={emailError}
        />
        <Field 
            name="password" type="password" ph="Ingrese su contraseña" label="Contraseña"
            warning={passError} fb={passError}
        />
    </FormBox>
</div>

<style>
    .signin {
        display:grid;
        place-items: center;
        width:100%;
        min-height: 30rem;
        padding:1em;
    }   
</style>
