import React from 'react'
import './Body.scss'
import Banner from '../../../images/AboutBanner.jpg'

export const Body = () => {
    return (
        <div className="AboutBody">
            <p>Pellentesque vitae ipsum dui. Quisque in quam imperdiet, pharetra turpis non, efficitur urna. Curabitur a lobortis purus. Suspendisse quis felis pharetra, pharetra risus eu, ullamcorper orci. Fusce quis congue risus. Sed ultrices, mi non ullamcorper auctor, dolor tortor ultrices urna, ac egestas nisl libero vitae est. Donec cursus varius finibus. Pellentesque scelerisque diam lectus, eu facilisis risus aliquam eu. Aenean vehicula quam in turpis malesuada, ut dapibus lectus facilisis.</p>
            <img src={Banner} alt="img" />
            <ul>
                <li>Quisque in quam imperdiet</li>
                <li>Pellentesque scelerisque diam lectus</li>
                <li>Class aptent taciti sociosqu</li>
                <li>Mauris mattis metus quis eros euismod</li>
            </ul>
            <p>Praesent interdum faucibus massa, non feugiat quam pharetra ac. Mauris aliquet dictum tortor sagittis semper. Donec sit amet turpis sollicitudin, laoreet urna vitae, iaculis ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris mattis metus quis eros euismod posuere.</p>
            <p>Praesent interdum faucibus massa, non feugiat quam pharetra ac. Mauris aliquet dictum tortor sagittis semper. Donec sit amet turpis sollicitudin, laoreet urna vitae, iaculis ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris mattis metus quis eros euismod posuere.</p>
        </div>
    )
}
