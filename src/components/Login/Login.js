import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAboAAAByCAMAAAAS5eTaAAAA3lBMVEX///8jLz7/mQAgLDwcKTn/lQAWJTb/lwD/lAAyPUv7+/sQITPo6etRWmUhLT15foYAFCq+wcTT1dgAByOlqa5IUFvx8vORlZwYJzcEGy+3ubxrcnqCh48JHTAAFyxBSlVbYWrKzM/f4OKZnaQAACD//PbDxcjr7O03QU6ytbljanPO0NOMkZgsN0X/2Kf/9ej/yIr/5sj/9OP/oyr/zpX/4rz/umP/pyz/nwD/oB//rkX/y4z/tl//sVP/5MP/wHP/wn3/y5v/1qH/7Nj/uGv/47z/sEL/nh7/z5T/3by567rwAAAVR0lEQVR4nO1dCXeiyhIOAXFBERUVgrhg3DWJZjHLZJJJ5k0m//8PPRYVuqrZjAbvGb9z7j0Tkabor7u6tm5PTmjIl/sluW5h1C/XqF+JhrB7czHb25lgsZCrxZWT0sT+pc2VR+Msw+mqwJsQdJ2fVevlLUQvy+NhlslmW8WRQblc69QLw+wsW6Vfpgkmm4IpgiMYr+vKrNAtB95hRMIgoIlBp2u+xWw2yw7b01I0QSEMWXOaqGqlPfKXr1c5XWFFxgORE/iC7PuCo6KLRmf9aanNm+2wIsuyvMposIuNRqspcOZFljMvt0uhQ8OYVnkVCaZz7ZFvb5y1ZtkoGDZ8nl4raUNdsN5CNN+DE9RZW877SpjX2i60DcuTsajzThMcr7e6eyLPKHICx9DAqdku/QVliXchVByRjbGqePuY5xtekWtTRmA9lxW93aE2vkZZE3wFG8p0wfJZXlyDXf1n/o/dfLT6QGSlM9r9Nbkq8SzxMHOszBo+5OXGKudCKDhC5eoq7x1urD4sBb7pdsg1VEFk/MCqrT7trraXI0aXrc9KAg9v1wsud+Useo6i1v0FqxWbqD2PYM0qVW2WFf97SAhdyu2lVpM2WFhBoI/hfNZLsyjaWqpWUFEDUvHLCyfEhBWC35Cr0B5aIF7Q7gW5QhkBfHbNXalC65Pm2O+NzoKIswWTppTbDPo0pYBCXW0s+d0uqkPamgeoYyzqakOa5Hphx9x1VZbyGPCOLaypMXUliXoz33YkHkn0qa37cNfw+T7x2AK+7yvUlZmg0cIpI/w4CnW5Kr0VQYvJTTC6AbrSBY8HDKKuLPqMAd2eGx3Wb4joRZpgjRBdsBIM98YXqOswwfeyzrpAgEKdr+gqvn17yHq0t9Qb8E5E3dhvwIrcxNIh/r0iUBbTBlos6JBQb2xP3SSEOfNVmmjeYerKFd/b1d3ZmRM1ypyzUJmAWwF1csl/liiF4EnEVZFgUYcUIwrQ8tuaukE2/E5RgP2AqSsEDFLa4rwdmPB1bgV+DG6F1LUD3lvv55tBjeP+8B24WDCobremrhBiFdngssDRhdTVfJZ857K4q2k3xWPb9B95jkaoBCxxkjpunA14X7Y1DewW1P0FbOCzCq/QBBM5MO22pY7SGVRZ2+TjIHX5oDHMNHfk3Q2QsIo6HBeL7WETd50AVjugFoIVr+kAB10WObJtPHB5SzCtnaUIpoMVKzp1hEteRs/khKbOSwIcLgK5ugLqZqPgQYpshu3QBeuPqI47VsA1V+uMEatclZzrARo9PiRi5uTgwGV1rewI1h+j1VkBqnww5FkK8EPZoUf35eBEZ/VCt2Pky/UW6CWWITqCpI5hsoGDlCvsRGPWWmQPsZxnPMnQaRAZ0iGlUydSO8nbChUqoUcMMG5Y1jM9ZAW0wQ6BxuxXWxTghxLWIpzorHi28ocGRSCOQASAIHVr6VgFCupc9Q+GxkCZNB1ElgjpyVA1SWS4kUYdryrD4cw/rMbrFihRSdJfmpLjnGUIK2YEBRMC0wgrTJCmVdqeyznwOqzoabQBuJO8MwdSZ0MUTAU/ZlSs3qXtshAAoIegvwi1FnBHKdRJRbuPBzLdP2IrWt8cc/mzKtLGhMEAu1EHUeIqaF0KDmHbqM1gB4sEAX1gAavEM8ETCWlp1CmcbDdu4HVHpYa844LkhoMBE+haAZ8EUydsFJDRonCnZNcDOTeF/jZhYhqkWlVgwKQOFh9KiAMBxwvIATEm5wdYPzvk3WzW01UU6vjqRiui51JD3nFRGxLPVGGcwACzHcScEHVeocrYjeO8wVsNvBFBHbD1mnBSwcaFgOTDCjIKCJBvA0YL0wSOJtlVhImPqWOH7nwewKvQUN8OWlPhXKNdh6ZPrUo+VQmmjrRAi0jLE9GuPDAKwKwTONebYLNQsPyM7OdwgzvPw9WXIwPqQMNwVaCBwFDziouoE3Uv79CKV6gB27io1cfVmcjxVukAp+M4LlQiwdSRaqsDlTyYs2D1IH3ycqM9tFxwQTcFayJi4FoYTl0bqUuBnMpwMYPzGFDrnVeIOo7IZhjAo4WuzBdQMyalUV0rjLG/0SBfOIQ6ngwQQY2pk/q44T+MN4J1zkZTrUrJFcI5EEZdF6lvkODNA2qbMB5eBnNHcicWoo58UzjO/KkbtSpNbSf2J4oYB1MHrRxkBpL+DNAjFOoCUIxHXRklIRSQ5oOhcwmO4wFY7DwmG/LrZuSbAmG5to+UXSvHyzNBtU7RAbREMHWw/zRolJG9MSK7Mx51cMoGU1eDo8hcjcDgho5kFjUCB2p7cwVSx4FhAQapL3WOMwyjeluiHmfWQaN3CiUmJ+WIHBb7nHXQoaZ4E9VQpQZHohvBgdTBvA4YpH7UrQw3Suo4JnK53MDQ4pgp0LcAvMPuLW2pMC3ByuM4Zkof+wWIGaBRKQ2Ckchwm2ALpA76Mh1yoYWTco2ak+YSvmKAGiV52m7NpIoE7Pt41AFPCk7KPhksi0KdKZhpec4qFVj4E0hdDaUk2RkMI8LsIMVtBlrCY8gghQmUsUH6QX7UnbTtDjuPEBmiwShNqxVJ1XmOpUQhg6mD6bwSOZKhjpqEWpikYI2hKZggUAULpA46/zDUbQFGwQQcnunAr2zYBdSxWTAw8hGpqxUkQT/fpnglXypmWb96VRvxqBsFUxddYRolLcvqKGvmvTmAuhHKwum4xgBOKR0Xfhm+MQRIHSyeywNv3486c3h0A2qs/ZCXx1mVD8zWxKUOrHVwqEekzpDbs1DBAqgzkLrkKHWJ3QjUgeXQTTsA6mBa8yQPzBR/6raAUWRUJbxI5UvUwd6IRN1E41Ra0gvAn7ocjjqrsAwGy4pSFSbyMOzX2lxJjrrcNKhs3YOvURdfYQ6KFRR6pMKfOhxG0Wmhalg4Q6MOxKdd1y+UusgKMy4mw6hlc99MXYmNUqBl3+xHXRlRr7Ro34OFhhSFGZk69ttm3cjPMBFRocL3UudbT48F86Muh6p2WZEaI2zAWRdOnThbM/QN1Bn9brHQao27XmUvYxNAZBVBlRQx25qRF76VOlplnS0YhwXzow5X7QqUPQOUL0aibh1s3BV1+UK1Wm2t9Xm9Zf5ld2lerjK6rnAsp+j8eNPLfbwjQxGG4+mZYeTztWKczMFuqZORTS/ywlCrl0zBBjUQ5vGhro/a8AtVwFBJIrPuTOI4TlnZv7UWz3HWXox8I6ty7qN5cSUaNp15RetvYtexkj47pQ4n2Xm22NkIFimGWaNkr33C8sjCpFAnQurWMdmdUad67rZD5uZX5RlwaFneUZooA9lse9eCxKjLoVh/hUhkRaKuiNRlxS/IBDPZtP08sDJ052YKpo6ZFSXWYktXm1JzJaNjaI1QOpSM3QE98n3U1YH/K4IyqijUUcIovj4ELKCiUGfAOtrh+soeqWMURhSkYWNUmhid+sqg1PuWPoUVL0BiOSHqDFh4x4NQTATqUBsMh5NwRK95OwKHn2EgzGVgn9QxAtPY9OuqzM7qqjNYrAcX8Vj5uh1SB+NSaGdThFQrWgtEzr/QdgIDlLhBuCNB8Y1h7pI6vuhdnSd2v7AtvN8D+TwJrXU5oA2wdRE+6+DqFZx+roGkDyXVWoqcOdghdTzotFWdFypVwl5xQs5BB3Q7qlzMjcOcAwNtzyOq1BFA1IXFMRe4HKp++bpdUgd3+65WsJN+aLgcVK5/F3XQVEcltLDYBFNHCaMEplNgdZuAvgG8ds/emW+kbpUDRdEftI8BVkEBNbI36lCBJyqhhVlyqC8o1SjUo1/8hGUqiGgw0T0EJUAd3A1SgT0Eaw/BQ/dGHXR+GSgYXHfg0oSrURhG07RxcSqXjDztpA9YzIf2dARUgidAXQvEwDjYQ3CpZ8lq7n1Rl4OPRblRsAbDUwQGtLMiFBM8rzeFWbs4QvQNoMKENm0ZuBqeSpwEqIMvh8pGoeISZ0bA5Z1RN4DUwT0HyB91Q8E2tMADV0SOV4VCF2hEsHqG7nry7F8/AOoqwAQv421NREvfRR1SB6BgiQEbCNBuBwo4QSoQVhkyIMHCH1B9fgDUQf0+Rnt1yPLOb6MOtowCnKSd4nvyDglO5T3nHJbBAgs0Jjwxzlu5mAB18LAMYGJDI4WxzkD0SrUv6mrwwWDbTZ9CjeARLOIpR9am4ZkbYGsDC5IMA4DhQFhOCVBXQCuGV//j4D0DxuLeLEwO2k9EZ1APrPIEHSdR6zWsll3vDGph4lVh5o8YTAlQp6Hd9N5gFDy1wIF3u87eqINWCNGNlBovu/kNBzAyGwi3JhPtKeHd9QOlNYOOAfgO6vAeXTcrYhToHeANJ+2NOmj7e8u4yvAQk7VgG5MwFnUecwMmicTNpuMSPNSAXAgToI7iuAqtvnWuTF+jnsNqQXUXxL1RB1Mw1mMLHVOwWt//nNHNwYyxqPNsu6Gkd8f9crkvtyQw59gZ4TkkQF2NcvwMJzCzmYhPAXbhnmG4N+rglnwLiiUYIwQcDdyUv0bdSQeFrHnBOnkeH1RBmuIJUEex/hkr9RN8mpe7wWl/+TrqOUhhgq03qm5NXcSzU9HBq0lQB5MrFGBy1Y2e3x91FI2JBEM0rlX59tTVIhyHadWGBB6q+D3UQV8GQ9Bg+bCqbfT8/qiDO+cxeA16EPr6GANIncjxui5Y0HUe7qwgt5iWg483s8GiZPsXqBt0G9ONaxmLOnyMIIlmEaZPzj0OzR7LivohB5k2GzBQWdkoAw91oqI3K1y7IY9KFs7k6TgrSbqnahjsDsalSBDiOSqT2J66CWeOqco6RBWLupNuoKhSwyo28MxMjoiV7bMOcxp0Zq1oHZFPaDdWcgNTa+pYvslrch+leMpyMVtZV+vDjd2jZvD+FE7FBS5bU7fq2419FYu6k6L/qsJKdoTCU1nFZ4n9TfukLjf2X4c5p3Bt4mo3ZeYJPzvbHBU1W8S0rVsv16vOb3+gPfm+WzBsCFnKDq+tqVvFfdYfxKQup+k+w0zIrpRwaf0NoRB4HuZuC9dz+Eg7B6LQWvG02TbLV72CdZrWz9G0z4LPH6lNtJn5YriSfZL19YxEdRz+ExUxqOs4Om+dbYxJndnDPMVWEXlO2wggO9/XNSDSfreL5KbU8c+z7m8EdR3BhDHJUqvJjSmTA8GoM6qC66EHGk+feDwb5YdhYmyNXM26tbsVm7qTckECZiQnSGMvD6Nzxln4SJDKlj0HEo+IH4kR4ckEHbDVHG/w7lQlEK83BSPq1+vWsJUQ6ZF/smxwRi3NRA+2Xs98tE9hUq1KDH4eGv95cjOVe+p3zVnrpJV6O7PWd26zXcSiDlbUnNnzVHE/mBQFSeAVexsQL6hStQuUTanZxD8EcVIbN88rGzDwWIRcQ3Avn/NoM6l2LrmowFPTbXQ0UzDBFawgg+EhS01pN6f7kCgX9aaw/uE1y7uozOr+FWUd1tMP51k0HEaq97rHuShzKi9U1nPCmJ1Xzjd/Ncx/nw/B+w7Mr1TOiaxpbiJPNa1QbWvFOm2RyJ9RB3LOi9iXjbIHPmdZ5zqmQW8JNi52zyjfMc52cpIy5cH9qdYSm+bQUGeFRsjBCiEvSl73fqEmN+pl8nv0P0I+tX7dcue/0rUD5JISrDYYGB1j8PXf/DxiS/R6vcvL9/nPn/PLXi9pYY6IisuLqx/L+3RmhdPl8+vNPGmhjghD7/bqPpNJpdLp0zXS6XQqlUnfLZKW7Qh/9D7vTJZc0rxIpzL/4sy7/Jz/B9aL3u21H282Us9JS5gAlpnU48EP2fljJoA3a97dJy1iAjDHcjpz2GvF5UvQhFtNu6SFTABv1nhOpV4PV2v2HjKuSWIaJTZSQH9mkpYyCVzYBlsqdXWZtCQ+eMs4fJmOwN3r1a+3CxNvv15/LDMeLfovzjpzIXlI2S9/+nSY5C1+v169zRfY+778e7rm7p9c60wslinHxH442Jnng/c1d+ll0qIkhN5jyumAzP1/jLzfqZW+vEtaksTwslo20pn060FbmwAXmRV1v5KWJDlcrKNL6VTm7uD9vA0+19TdJi1Jgni/Tm2stcyf28P1FQhsZt1/SVXsHL0frq2dTl2/Heqit7h4dQfW02qRfkhSogPAzaknJJ95eH1PWiCM3vz3fSaV+bHm7odDXeolUakOAHNXaVozL/V8cVh6s3ezzNhBlMzn6pNrZ7ClPgPv+xfQuyPCvJa9eTgmy8+7TfhkTd3C0RPpj396qVvhIu2ZeLa9eX8Q7M1vTEW5kepjtRB/rpa6fzHlg7F4BvmVdCr9cPWepObsvV9dp73xytOfqysvDnWZiwSlOyRcfBATz2HvMSn2eu+vj2lvliCdedzYT/eOvnw4VGv427H4gfNjptHy+PTt7PXmV48gu5NOP7mCZo72JcTtPZx4zrr38HrxfQN8cfH7NAMGkemzeFbeG4e6zAF6Mcmhd5WikGexl3m4ut0/fb3bV6v4C07+VOrG+60/9vXUj72L89/C4odPOYhVl7V8mu+PvsXPq+UprYgonXkmnICVvvwnq8GCcXvtW8tjWZ3PT/PFrte+3vvty+MHUWnpeeY1MCSdKNg/WQwWht7fB/96nrSpPE8ff7/NL3fCX693efv0+9Fa3OiPxEn83mP6OOl8cfmUDirGsujLpJc/ri6+VMt5+b+b12enrtnvSSlK0dq7rS//4SRrCC6vUiElkA6Bmfs/r79uf8ZSoZfz219Xz8tTq8DLZ66tiXumTC3bH0+fHn06X/SuTsPIWxG4qtt6fHm6+Pw5f18skC411eLiff75+ev17s9DalWTFzYyzBlHs/4v7dBz6hhICULv6SEKeWsKLQ5t1ffx8XF9fb1cPtpYmv++Nj+yPYxwxtbNZU5/0902O0GeOXrjIbi88bc2AzikI04bphfplxSwjJTU8qguQ9G7WAZaLPtAynQHfKl5t5g9PcZRImH+Emqx7BCmWn3+GSCN6dSlj35BZPQuHnFwak+83d8E68J7U/UemYuDxdVy3+yZvF2Hp3dNd+SoLWOiN//9sD/2TPP0+iWKg//zYEvWDhqLz7vrfRgtpidgzrcjJftFb/76APe4fY02KyFxPIzhm/B+8UJLqsVnzXLS71+/IQ14hAeLt5dlKihwHIG108erb0y+H+Gi17t9+r1M2zHk6Aymnbn2+PL3/XjkUKK4XMz/3j1fn9ozMIBCOxRmBTlPr59f3t53nqw9Yktcvs8/n+7+fJxuMgkpF45a/fi4/nP393P+flSRB4newjp97fPz8+LXr5unKxs3n3Ym6DjNKPg/aJ8ede4NRxUAAAAASUVORK5CYII=" alt=""/>
            </Link>
            
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="login__signInButton"
                    type="submit"
                    onClick={signIn}
                    >Sign In</button>
                </form>
                <p>By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and Privacy Notice.</p>
                <button className="login__registerButton"
                onClick={register}
                >Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
