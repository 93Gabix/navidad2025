
        // Crear nieve elegante
        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.innerHTML = '❄';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
            snowflake.style.opacity = Math.random() * 0.6 + 0.2;
            snowflake.style.fontSize = Math.random() * 8 + 8 + 'px';
            
            document.body.appendChild(snowflake);
            
            setTimeout(() => {
                snowflake.remove();
            }, 10000);
        }

        setInterval(createSnowflake, 300);

        // Crear estrellas doradas flotantes
        function createStar() {
            const star = document.createElement('div');
            star.classList.add('particle', 'star');
            star.innerHTML = '✦';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = Math.random() * window.innerHeight + 'px';
            star.style.animationDelay = Math.random() * 3 + 's';
            
            document.body.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 6000);
        }

        setInterval(createStar, 800);

        // Cambiar año con animación
        function showYear(year) {
            const allContents = document.querySelectorAll('.year-content');
            const allButtons = document.querySelectorAll('.year-btn');
            
            allContents.forEach(content => content.classList.remove('active'));
            allButtons.forEach(btn => btn.classList.remove('active'));
            
            document.getElementById('year-' + year).classList.add('active');
            event.target.classList.add('active');
            
            // Scroll suave al contenido
            document.querySelector('.content-area').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }

        // Inicializar partículas al cargar
        for(let i = 0; i < 15; i++) {
            setTimeout(createStar, i * 200);
        }

         // Control de audio
        let audio;
        let audioControl;
        let audioIcon;
        let isPlaying = false;

        function toggleAudio() {
            if (!audio) {
                console.error('Audio element not found');
                return;
            }
            
            if (isPlaying) {
                audio.pause();
                audioIcon.textContent = '🎵';
                audioControl.style.animation = 'none';
            } else {
                audio.play().catch(err => {
                    console.error('Error playing audio:', err);
                    alert('No se puede reproducir la música. Verifica que el archivo exista en la ubicación correcta.');
                });
                audioIcon.textContent = '🔊';
                audioControl.style.animation = 'pulse 2s ease-in-out infinite';
            }
            isPlaying = !isPlaying;
        }

        // Intenta reproducir automáticamente (algunos navegadores lo bloquean)
        window.addEventListener('load', () => {
            audio = document.getElementById('backgroundMusic');
            audioControl = document.getElementById('audioControl');
            audioIcon = document.getElementById('audioIcon');
            
            if (audio) {
                audio.play().then(() => {
                    isPlaying = true;
                    audioIcon.textContent = '🔊';
                    audioControl.style.animation = 'pulse 2s ease-in-out infinite';
                }).catch(() => {
                    // Si falla la reproducción automática, el usuario puede hacer clic
                    console.log('Click en el botón de música para reproducir');
                });
            }
        });

        // Intenta reproducir automáticamente (algunos navegadores lo bloquean)
        window.addEventListener('load', () => {
            audio.play().then(() => {
                isPlaying = true;
                audioIcon.textContent = '🔊';
            }).catch(() => {
                // Si falla la reproducción automática, el usuario puede hacer clic
                console.log('Click en el botón de música para reproducir');
            });
        });
