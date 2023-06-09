USE [master]
GO
/****** Object:  Database [Personajes]    Script Date: 17/5/2023 10:12:34 ******/
CREATE DATABASE [Personajes]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Personajes', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Personajes.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Personajes_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\Personajes_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Personajes] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Personajes].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Personajes] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Personajes] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Personajes] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Personajes] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Personajes] SET ARITHABORT OFF 
GO
ALTER DATABASE [Personajes] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Personajes] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Personajes] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Personajes] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Personajes] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Personajes] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Personajes] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Personajes] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Personajes] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Personajes] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Personajes] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Personajes] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Personajes] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Personajes] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Personajes] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Personajes] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Personajes] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Personajes] SET RECOVERY FULL 
GO
ALTER DATABASE [Personajes] SET  MULTI_USER 
GO
ALTER DATABASE [Personajes] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Personajes] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Personajes] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Personajes] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Personajes] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Personajes', N'ON'
GO
ALTER DATABASE [Personajes] SET QUERY_STORE = OFF
GO
USE [Personajes]
GO
/****** Object:  User [alumno]    Script Date: 17/5/2023 10:12:34 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 17/5/2023 10:12:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pelicula](
	[idPelicula] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](50) NOT NULL,
	[Titulo] [varchar](50) NOT NULL,
	[Fecha_de_creacion] [datetime] NOT NULL,
	[Calificacion] [int] NOT NULL,
	[Personajes_asociados] [int] NOT NULL,
 CONSTRAINT [PK_Pelicula] PRIMARY KEY CLUSTERED 
(
	[idPelicula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 17/5/2023 10:12:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[idPersonaje] [int] IDENTITY(1,1) NOT NULL,
	[imagen] [varchar](50) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [int] NOT NULL,
	[Historia] [varchar](50) NOT NULL,
	[PeliculasSeriesAsociadas] [int] NOT NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[idPersonaje] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Relacion]    Script Date: 17/5/2023 10:12:34 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Relacion](
	[iDPelicula] [int] NOT NULL,
	[iDPersonajes] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Pelicula] ON 

INSERT [dbo].[Pelicula] ([idPelicula], [Imagen], [Titulo], [Fecha_de_creacion], [Calificacion], [Personajes_asociados]) VALUES (1, N'ShrekPeli.jpg', N'Shrek', CAST(N'2001-07-19T00:00:00.000' AS DateTime), 5, 1)
INSERT [dbo].[Pelicula] ([idPelicula], [Imagen], [Titulo], [Fecha_de_creacion], [Calificacion], [Personajes_asociados]) VALUES (4, N'LosIncreibles.jpg', N'Los increibles', CAST(N'2004-12-02T00:00:00.000' AS DateTime), 3, 3)
INSERT [dbo].[Pelicula] ([idPelicula], [Imagen], [Titulo], [Fecha_de_creacion], [Calificacion], [Personajes_asociados]) VALUES (5, N'Phineas_y_ferb.jpg', N'Phineas_y_ferb', CAST(N'2007-08-17T00:00:00.000' AS DateTime), 3, 1)
INSERT [dbo].[Pelicula] ([idPelicula], [Imagen], [Titulo], [Fecha_de_creacion], [Calificacion], [Personajes_asociados]) VALUES (6, N'ToyStory.jpg', N'ToyStory', CAST(N'1996-03-14T00:00:00.000' AS DateTime), 5, 2)
INSERT [dbo].[Pelicula] ([idPelicula], [Imagen], [Titulo], [Fecha_de_creacion], [Calificacion], [Personajes_asociados]) VALUES (7, N'Monsters.inc.jpg', N'Monsters.inc', CAST(N'2001-12-06T00:00:00.000' AS DateTime), 5, 2)
SET IDENTITY_INSERT [dbo].[Pelicula] OFF
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 

INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (1, N'shrek.jpg', N'Shrek', 42, 250, N'tfcgvhjklsagiuas', 1)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (2, N'MrIncreible.jpg', N'Mr.Increible', 35, 120, N'sgudbiuabsdoihsa', 4)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (3, N'sullivan.jpg', N'Sullivan', 25, 527, N'asduysauobasi', 7)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (4, N'Perry.jpg', N'Perry', 1, 15, N'ytgcvahgdsi', 5)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (5, N'Edna.jpg', N'Edna_Moda', 56, 37, N'sdkjaskdha', 4)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (6, N'Buzz.jpg', N'Buzzlightyear', 15, 1, N'fghj', 6)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (8, N'Woody.jpg', N'Woody', 20, 1, N'ysgsaoibsa', 6)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (9, N'Mike.jpg', N'MikeWasausky', 28, 12, N'ioiasoijasd', 7)
INSERT [dbo].[Personajes] ([idPersonaje], [imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeriesAsociadas]) VALUES (10, N'Dash.jpg', N'Dash', 14, 35, N'ihdsahuisaduhads', 4)
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (1, 1)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (4, 2)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (4, 5)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (4, 10)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (5, 4)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (6, 6)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (6, 8)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (7, 3)
INSERT [dbo].[Relacion] ([iDPelicula], [iDPersonajes]) VALUES (7, 9)
GO
ALTER TABLE [dbo].[Relacion]  WITH CHECK ADD  CONSTRAINT [FK_Relacion_Pelicula] FOREIGN KEY([iDPelicula])
REFERENCES [dbo].[Pelicula] ([idPelicula])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Relacion] CHECK CONSTRAINT [FK_Relacion_Pelicula]
GO
ALTER TABLE [dbo].[Relacion]  WITH CHECK ADD  CONSTRAINT [FK_Relacion_Personajes] FOREIGN KEY([iDPersonajes])
REFERENCES [dbo].[Personajes] ([idPersonaje])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Relacion] CHECK CONSTRAINT [FK_Relacion_Personajes]
GO
USE [master]
GO
ALTER DATABASE [Personajes] SET  READ_WRITE 
GO
