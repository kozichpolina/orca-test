import { ReactSVG } from 'react-svg';

import Cross from '../../assets/icons/cross.svg';
import DotsVertical from '../../assets/icons/dots-vertical.svg';
import ExclaminationTriangle from '../../assets/icons/exclamation-triangle.svg';
import Files from '../../assets/icons/files.svg';
import Pencil from '../../assets/icons/pencil.svg';
import Trash from '../../assets/icons/trash.svg';

export const iconTypes = {
    cross: 'CROSS',
    dotsVertical: 'DOTS_VERTICAL',
    exclaminationTriangle: 'EXCLAMINATION_TRIANGLE',
    files: 'FILES',
    pencil: 'PENCIL',
    trash: 'TRASH'
}

const iconSrc = {
    CROSS: Cross,
    DOTS_VERTICAL: DotsVertical,
    EXCLAMINATION_TRIANGLE: ExclaminationTriangle,
    FILES: Files,
    PENCIL: Pencil,
    TRASH: Trash
}

export const IconComponent = ({
   className,
   type,
   ...props
}) => {
    return (
        <ReactSVG
            src={iconSrc[type]}
            className={className}
            wrapper="span"
        />
    )
};
