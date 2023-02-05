import React from 'react';

const HowToPlay = (props) => {

    const toggleModal = () => {
        props.setBool(!props.bool);
    };

    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={toggleModal}>
                        &times;
                    </span>
                    <h3>Nasıl Oynanır?:</h3>
                    <p>1. Oyuncular: Oyun iki oyuncu tarafından oynanır. Her oyuncu, sırası gelince bir kare içinde "X" veya "O" işareti koyar.</p>
                    <p>2. Oyuncu 1 "X" , Oyuncu 2 "Y" işareti koyar.</p>
                    <p>3. Kazanma şartı: Bir oyuncu, bir sütun, bir satır veya bir çaprazda üç işaretin yanyana gelmesini sağlarsa oyunu kazanır.</p>
                    <p>4. Beraberlik: Eğer hiçbir oyuncu kazanamazsa oyun berabere sonuçlanır.</p>
                    <p>5. Seslenme: Sırası gelen oyuncu kutucuk numarasını ve işaretlemek istediği harfi söyler.</p>
                </div>
            </div>
        </div>
    );
};

export default HowToPlay;
