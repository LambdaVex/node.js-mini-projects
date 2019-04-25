const express         = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
/* Current directory */
app.set('views', __dirname + '/views');

app.use('/assets', express.static('assets'));


  /*
  The template in the /views directory (index.html) will serve 5 different pages using the same template.
  The paths to serve on are:
  /
  /about
  /news
  /our-people
  /careers
  */

const index = {
    title: "Home",
    articleParas: [{text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum augue, gravida nec lacinia condimentum, imperdiet at nunc. Curabitur eget elementum tortor, ornare mattis ligula. Vestibulum pulvinar nunc eget urna vestibulum convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a varius neque, at laoreet nisi. Vestibulum maximus lobortis libero non porttitor. Integer consequat nec erat at varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},
        {text: "Maecenas in consectetur lorem, sit amet gravida orci. Maecenas laoreet lacus et enim aliquam, nec dictum ex sollicitudin. Ut sed eleifend justo. Etiam facilisis nunc quis nisl congue, quis dictum nisl volutpat. Suspendisse sollicitudin tristique diam hendrerit suscipit. Praesent sodales ligula at felis pharetra, nec dapibus velit porta. Etiam nec lectus in sapien cursus rutrum. Nam tristique est et felis consequat pharetra. Vestibulum vitae maximus est. Aliquam erat volutpat."},
        {text: "Vestibulum non dui pretium, finibus ante quis, luctus sapien. Maecenas a venenatis sem. Sed lacinia justo ut auctor porta. Nulla quis ultrices urna, quis tempor magna. Pellentesque at dui eget augue maximus convallis. Donec vel cursus lorem. Donec lorem neque, aliquam ut facilisis id, tincidunt eget ligula. Vestibulum eu consectetur felis."}]
};

const about = {
    title: "About Us",
    articleParas: [{text: "Maecenas in consectetur lorem, sit amet gravida orci. Maecenas laoreet lacus et enim aliquam, nec dictum ex sollicitudin. Ut sed eleifend justo. Etiam facilisis nunc quis nisl congue, quis dictum nisl volutpat. Suspendisse sollicitudin tristique diam hendrerit suscipit. Praesent sodales ligula at felis pharetra, nec dapibus velit porta. Etiam nec lectus in sapien cursus rutrum. Nam tristique est et felis consequat pharetra. Vestibulum vitae maximus est. Aliquam erat volutpat."},
        {text: "Vestibulum non dui pretium, finibus ante quis, luctus sapien. Maecenas a venenatis sem. Sed lacinia justo ut auctor porta. Nulla quis ultrices urna, quis tempor magna. Pellentesque at dui eget augue maximus convallis. Donec vel cursus lorem. Donec lorem neque, aliquam ut facilisis id, tincidunt eget ligula. Vestibulum eu consectetur felis."},
        {text: "Duis quis neque consequat, pellentesque libero quis, sagittis arcu. Sed tincidunt in ipsum non laoreet. Proin id blandit metus, eu semper orci. Vivamus eu fringilla leo. Quisque et faucibus felis. Pellentesque tincidunt purus ut elit malesuada, quis tristique sem hendrerit. Nunc dapibus vulputate sapien eget maximus. In porta, sem sit amet commodo placerat, neque sapien tempor nulla, sit amet pretium velit turpis nec nulla. Etiam porta pretium turpis, sed dignissim nisl scelerisque ac. Phasellus sed efficitur justo, ac egestas ex. Vestibulum interdum fringilla magna, quis maximus dolor pulvinar nec. Vestibulum posuere sem nulla, ac condimentum tortor imperdiet et. Mauris viverra ultricies justo, in interdum lacus feugiat rutrum. Nulla hendrerit vel tortor non gravida. Praesent eu ultricies mi."}]
};

const news = {
    title: "Latest News",
    articleParas: [{text: "Vestibulum non dui pretium, finibus ante quis, luctus sapien. Maecenas a venenatis sem. Sed lacinia justo ut auctor porta. Nulla quis ultrices urna, quis tempor magna. Pellentesque at dui eget augue maximus convallis. Donec vel cursus lorem. Donec lorem neque, aliquam ut facilisis id, tincidunt eget ligula. Vestibulum eu consectetur felis."},
        {text: "Duis quis neque consequat, pellentesque libero quis, sagittis arcu. Sed tincidunt in ipsum non laoreet. Proin id blandit metus, eu semper orci. Vivamus eu fringilla leo. Quisque et faucibus felis. Pellentesque tincidunt purus ut elit malesuada, quis tristique sem hendrerit. Nunc dapibus vulputate sapien eget maximus. In porta, sem sit amet commodo placerat, neque sapien tempor nulla, sit amet pretium velit turpis nec nulla. Etiam porta pretium turpis, sed dignissim nisl scelerisque ac. Phasellus sed efficitur justo, ac egestas ex. Vestibulum interdum fringilla magna, quis maximus dolor pulvinar nec. Vestibulum posuere sem nulla, ac condimentum tortor imperdiet et. Mauris viverra ultricies justo, in interdum lacus feugiat rutrum. Nulla hendrerit vel tortor non gravida. Praesent eu ultricies mi."},
        {text: "Donec aliquam urna sed eros viverra maximus. Suspendisse vitae pellentesque lorem. Aenean nec accumsan dolor. Proin velit risus, consectetur sit amet lacus lacinia, finibus fermentum nibh. Duis consectetur tempus lorem eu rhoncus. Sed dictum erat vel ligula consequat, eget ornare sem scelerisque. Nulla eu magna id enim interdum blandit vitae non massa. Integer vehicula dapibus ligula, at auctor lectus volutpat sit amet. Nullam vulputate arcu vitae turpis iaculis varius. Mauris ac elit ac libero pharetra suscipit."}]
};

const ourPeople = {
    title: "Our People",
    articleParas: [{text: "Duis quis neque consequat, pellentesque libero quis, sagittis arcu. Sed tincidunt in ipsum non laoreet. Proin id blandit metus, eu semper orci. Vivamus eu fringilla leo. Quisque et faucibus felis. Pellentesque tincidunt purus ut elit malesuada, quis tristique sem hendrerit. Nunc dapibus vulputate sapien eget maximus. In porta, sem sit amet commodo placerat, neque sapien tempor nulla, sit amet pretium velit turpis nec nulla. Etiam porta pretium turpis, sed dignissim nisl scelerisque ac. Phasellus sed efficitur justo, ac egestas ex. Vestibulum interdum fringilla magna, quis maximus dolor pulvinar nec. Vestibulum posuere sem nulla, ac condimentum tortor imperdiet et. Mauris viverra ultricies justo, in interdum lacus feugiat rutrum. Nulla hendrerit vel tortor non gravida. Praesent eu ultricies mi."},
        {text: "Donec aliquam urna sed eros viverra maximus. Suspendisse vitae pellentesque lorem. Aenean nec accumsan dolor. Proin velit risus, consectetur sit amet lacus lacinia, finibus fermentum nibh. Duis consectetur tempus lorem eu rhoncus. Sed dictum erat vel ligula consequat, eget ornare sem scelerisque. Nulla eu magna id enim interdum blandit vitae non massa. Integer vehicula dapibus ligula, at auctor lectus volutpat sit amet. Nullam vulputate arcu vitae turpis iaculis varius. Mauris ac elit ac libero pharetra suscipit."},
        {text: "Pellentesque risus nisi, malesuada at tempor in, cursus vitae nibh. Maecenas vitae sollicitudin libero, eget blandit ex. Fusce vitae purus quis dolor pulvinar tempus. Nullam fermentum efficitur massa. Nullam mattis augue ac feugiat posuere. Curabitur eget pellentesque nisi. Nunc semper turpis non blandit pretium. Etiam mollis libero at mi egestas faucibus. Fusce in leo vel augue faucibus bibendum ut non magna. Nunc ut nunc vitae nulla placerat placerat. Maecenas tincidunt, urna et euismod imperdiet, dui purus tempus odio, vel posuere arcu odio non risus."}]
};

const careers = {
    title: "Careers",
    articleParas: [{text: "Donec aliquam urna sed eros viverra maximus. Suspendisse vitae pellentesque lorem. Aenean nec accumsan dolor. Proin velit risus, consectetur sit amet lacus lacinia, finibus fermentum nibh. Duis consectetur tempus lorem eu rhoncus. Sed dictum erat vel ligula consequat, eget ornare sem scelerisque. Nulla eu magna id enim interdum blandit vitae non massa. Integer vehicula dapibus ligula, at auctor lectus volutpat sit amet. Nullam vulputate arcu vitae turpis iaculis varius. Mauris ac elit ac libero pharetra suscipit."},
        {text: "Pellentesque risus nisi, malesuada at tempor in, cursus vitae nibh. Maecenas vitae sollicitudin libero, eget blandit ex. Fusce vitae purus quis dolor pulvinar tempus. Nullam fermentum efficitur massa. Nullam mattis augue ac feugiat posuere. Curabitur eget pellentesque nisi. Nunc semper turpis non blandit pretium. Etiam mollis libero at mi egestas faucibus. Fusce in leo vel augue faucibus bibendum ut non magna. Nunc ut nunc vitae nulla placerat placerat. Maecenas tincidunt, urna et euismod imperdiet, dui purus tempus odio, vel posuere arcu odio non risus."},
        {text: "Praesent auctor nunc sed dui consequat scelerisque. Proin vestibulum tellus fringilla dapibus scelerisque. Integer eu blandit est. Sed eget libero varius, porttitor risus in, luctus quam. Integer vel mi nec tellus convallis elementum. Vestibulum consequat non nulla non iaculis. Nunc facilisis blandit ante, at vulputate ligula lobortis eget. Nam vulputate tortor sodales, ornare justo sed, molestie enim."}]
};

app.get('/', (req, res) => {

    res.render('index', index);

});

app.get('/about', (req, res) => {

    res.render('index', about);

});

app.get('/news', (req, res) => {

    res.render('index', news);

});

app.get('/our-people', (req, res) => {

    res.render('index', ourPeople);

});

app.get('/careers', (req, res) => {

    res.render('index', careers);

});

app.listen(8080);