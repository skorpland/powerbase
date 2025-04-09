import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:powerbase_flutter/powerbase_flutter.dart';
import 'package:powerbase_quickstart/pages/account_page.dart';
import 'package:powerbase_quickstart/pages/login_page.dart';

Future<void> main() async {
  await dotenv.load();

  await Powerbase.initialize(
    url: dotenv.env['POWERBASE_URL']!,
    anonKey: dotenv.env['POWERBASE_ANON_KEY']!,
  );
  runApp(const MyApp());
}

final powerbase = Powerbase.instance.client;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Powerbase Flutter',
      theme: ThemeData.dark().copyWith(
        primaryColor: Colors.green,
        textButtonTheme: TextButtonThemeData(
          style: TextButton.styleFrom(
            foregroundColor: Colors.green,
          ),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            foregroundColor: Colors.white,
            backgroundColor: Colors.green,
          ),
        ),
      ),
      home: powerbase.auth.currentSession == null
          ? const LoginPage()
          : const AccountPage(),
    );
  }
}

extension ContextExtension on BuildContext {
  void showSnackBar(String message, {bool isError = false}) {
    ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: isError
            ? Theme.of(this).colorScheme.error
            : Theme.of(this).snackBarTheme.backgroundColor,
      ),
    );
  }
}
