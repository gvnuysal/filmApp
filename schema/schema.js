const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;
//graphql de değişkeninde birden falza veri tipi olduğu için hepsi bir arada olsun istersek süslü parantezler ile kapsüllüyoruz.
const MovieType = new GraphQLObjectType({
    name: 'Movie',
    description:"İzlediğiniz filmlerin kayıtlarını tutan tablo",
    fields: () => ({
        id: {
            type: GraphQLString,
            description: "graphlql primary key"
        },
        title: {
            type: GraphQLString,
            description: "Film adı bu kolonda yer alacak"
        },
        description: {
            type: GraphQLString,
            description: "Film hakkında bilgiler yer alacak"
        },
        year: {
            type: GraphQLInt,
            description: "Filmin yayına giriş tarihi"
        }
    })
});