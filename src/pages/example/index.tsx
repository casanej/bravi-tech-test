import { Container } from 'components';
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { Blockquote, ExampleContent, ExampleMenu, ExampleMenuLinks, ExamplePageStyled } from './index.styled';

export const ExamplePage = (): ReactElement => {

    return <ExamplePageStyled>
        <ExampleMenu>
            <div>Bravi Technical Test</div>
            <ExampleMenuLinks>
                <Link to='/'>Home</Link>
                <Link to='/add-theme'>Add Theme</Link>
            </ExampleMenuLinks>
        </ExampleMenu>
        <Container>
            <ExampleContent>
                <h1>Example Page Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dolor id odio dapibus blandit. Nam et vulputate nisi. Ut facilisis dictum leo. Vestibulum vitae tempus tellus. Vivamus pellentesque sodales turpis, in euismod nibh eleifend ac. Quisque eget finibus lacus. Nulla laoreet odio nec quam auctor, quis feugiat est aliquet. In hac habitasse platea dictumst. In hendrerit lacus sit amet scelerisque laoreet. Aliquam iaculis et nisi sed consequat. Fusce cursus sem et diam porttitor, non suscipit arcu maximus.</p>
                <p>Nulla ut ullamcorper elit, nec dapibus diam. Sed non nibh egestas, malesuada arcu ac, molestie arcu. Donec arcu est, ultrices ut ultricies sed, malesuada at leo. Phasellus tempor ex ac leo ullamcorper sollicitudin non gravida metus. Integer vel auctor mauris. Morbi vitae metus ut libero accumsan ultrices eget vel ligula. Nunc interdum metus vitae leo aliquet, vitae condimentum elit facilisis. Nullam auctor enim ut ultrices aliquam. Pellentesque eget ornare magna, a gravida quam. Nulla tristique nulla ut augue aliquam viverra. Proin et nibh erat. Praesent dui neque, luctus id placerat a, convallis convallis mi. Nullam aliquet lacus quis augue varius malesuada. Phasellus elit dui, tristique id hendrerit ut, tempus vitae nunc. Quisque lobortis tristique quam.</p>
                <Blockquote>
                    <p>Aenean tempor commodo augue, sit amet lobortis nulla mollis eget. Sed faucibus sagittis pellentesque. Fusce nec finibus risus. Suspendisse at ante dolor. Pellentesque placerat diam ipsum, quis imperdiet felis blandit at. Donec volutpat laoreet massa. Pellentesque eleifend sollicitudin est, semper tempus lacus imperdiet nec. Vivamus laoreet fermentum finibus. Duis nibh ante, rutrum et pharetra quis, hendrerit vitae eros. Vestibulum condimentum, sapien in feugiat eleifend, arcu nisl elementum elit, eget viverra odio orci accumsan ex. In in dui turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi mattis sapien augue, non lacinia lacus eleifend ac. In lacus turpis, gravida nec felis vitae, consectetur interdum odio. Nam mollis feugiat urna quis luctus.</p>
                </Blockquote>
                <p>Nam ut congue est. Aliquam et justo eu erat pulvinar tempor. Nam imperdiet justo velit, quis rhoncus magna elementum in. Etiam dictum nunc nibh, tristique aliquam erat pulvinar vel. Aliquam sit amet nulla ut erat vehicula viverra non et erat. Nunc id scelerisque urna, et sollicitudin mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In eu tempor metus. Cras blandit tincidunt condimentum. Suspendisse ullamcorper commodo turpis id ullamcorper. Phasellus auctor convallis tortor eu dignissim. Curabitur vel dui nec augue lobortis faucibus a a odio. Donec ornare metus vel neque commodo, non pharetra diam consequat. Suspendisse potenti. Aliquam ultricies leo at tristique hendrerit. Aenean ultricies iaculis ullamcorper.</p>
                <p>Quisque mollis temdivus tempor. Curabitur sed consectetur enim. Aliquam sed leo a libero finibus tristique. Maecenas egestas velit vel lectus bibendum, eget auctor orci dignissim. Quisque id posuere erat. Morbi a mauris malesuada, tincidunt enim a, commodo leo. Quisque in urna ac ipsum tempus semper. Curabitur pellentesque dolor non metus ornare aliquet. Nam pretium arcu et mauris viverra finibus. Nam eu tempor odio, eu aliquet felis. Etiam ultrices velit a tellus suscipit bibendum. Donec ligula ligula, vulputate nec aliquet at, vestibulum a justo. Suspendisse diam enim, blandit et ex nec, dictum dapibus massa. Sed sollicitudin erat vitae ultrices eleifend. Suspendisse nec felis eleifend, lobortis tellus quis, ullamcorper enim. Phasellus tempus nisl ac quam feugiat, at pulvinar nunc lacinia.</p>
            </ExampleContent>
        </Container>
    </ExamplePageStyled>
};
