import us from '../assets/flags/UM.png';
import es from '../assets/flags/ES.png';
import br from '../assets/flags/BR.png';

export const languagesAvailable: LanguageSelection[] = [ 
                             {sigla: 'en-US', flag: us},
                             {sigla: 'es-AR', flag: es}, 
                             {sigla: 'pt-br', flag: br}, 
                            ];

export interface LanguageSelection {
  sigla: LanguageOption,
  flag: string
}
