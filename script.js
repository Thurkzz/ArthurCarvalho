document.addEventListener('DOMContentLoaded', () => {

    // --- 1. AÇÃO: COPIAR E-MAIL ---
    const btnCopiarEmail = document.getElementById('btn-copiar-email');
    const emailText = 'arthurcarvalho837@gmail.com';

    if (btnCopiarEmail) {
        btnCopiarEmail.addEventListener('click', () => {
            // Utiliza a API moderna do navegador para copiar texto
            navigator.clipboard.writeText(emailText).then(() => {
                // Feedback visual temporário no botão
                const textoOriginal = btnCopiarEmail.innerHTML;
                btnCopiarEmail.innerHTML = '<i class="fa-solid fa-check"></i> Copiado!';
                btnCopiarEmail.style.borderColor = '#00ff88';
                btnCopiarEmail.style.color = '#00ff88';

                // Restaura o botão após 2.5 segundos
                setTimeout(() => {
                    btnCopiarEmail.innerHTML = textoOriginal;
                    btnCopiarEmail.style.borderColor = '';
                    btnCopiarEmail.style.color = '';
                }, 2500);
            }).catch(err => {
                console.error('Erro ao copiar e-mail: ', err);
            });
        });
    }

    // --- 2. AÇÃO: ABRIR WHATSAPP ---
    const btnWhatsapp = document.getElementById('btn-whatsapp');
    if (btnWhatsapp) {
        btnWhatsapp.addEventListener('click', () => {
            /* 
             * Substitua o valor abaixo pelo seu número de telefone completo com DDD 
             * Exemplo: '5531999999999'
             */
            const numeroTelefone = '5531993939795'; 
            const mensagem = encodeURIComponent('Olá Arthur, vi seu portfólio e gostaria de entrar em contato!');
            const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${mensagem}`;
            
            // Abre o link do WhatsApp em uma nova aba
            window.open(urlWhatsapp, '_blank');
        });
    }

    // --- 3. AÇÃO: ABRIR INSTAGRAM ---
    const btnInstagram = document.getElementById('btn-instagram');
    if (btnInstagram) {
        btnInstagram.addEventListener('click', () => {
            const usuarioInstagram = '_thurkzzz';
            const urlInstagram = `https://www.instagram.com/${usuarioInstagram}/`;
            
            // Abre o perfil em uma nova aba
            window.open(urlInstagram, '_blank');
        });
    }
});